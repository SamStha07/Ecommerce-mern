const express = require('express');
const jwt = require('jsonwebtoken');

const catchAsync = require('../../utils/catchAsync');
const User = require('../../models/userModel');
const AppError = require('../../utils/appError');

// Create new Admin
exports.signup = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const newAdmin = await User.create({
    firstName,
    lastName,
    email,
    password,
    username: Math.random().toString(),
    role: 'admin',
  });

  // create token of the current user
  const token = jwt.sign(
    {
      id: newAdmin._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '90d',
    },
  );

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newAdmin,
    },
  });
});

// Login Admin
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  // 2) Check if user exists && password is correct
  const user = await User.findOne({
    email,
  }).select('+password');

  // correctPassword is coming from userModel method and returns true or false
  // if(!user || !correct)
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything ok, send token to Admin
  if (user.role === 'admin') {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    );

    res.status(200).json({
      status: 'success',
      token,
      data: user,
    });
  } else {
    return next(new AppError('User must be Admin to access.', 401));
  }
});

import React, { useState } from 'react';
import { profiler } from '../../services/users/profileUser';

export type UserState = {
  value: string;
  editing: boolean;
}

export type User = {
  name: UserState;
  password: UserState;
  city: UserState;
  state: UserState;
}

const token = localStorage.getItem("token")

export const handleSaveEdit = (user: User | null) => {
  if (!user) {
    return Promise.reject('O objeto de usuário é nulo');
  }

  const token = localStorage.getItem("token");

  const updatedFields = {};
  Object.keys(user).forEach((key) => {
    if (user[key].editing) {
      updatedFields[key] = user[key].value;
    }
  });

  console.log("Token:", token);
  console.log("Updated Fields:", updatedFields);

  return profiler(token, updatedFields)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error(error.response || error);
      throw error; 
    });
};

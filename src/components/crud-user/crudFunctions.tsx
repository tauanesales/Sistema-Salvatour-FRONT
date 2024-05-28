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

export const handleSaveEdit = (user: any) => {
  if (!user) {
    return Promise.reject('O objeto de usuário é nulo');
  }

  const token = localStorage.getItem("token");

  return profiler(token, user)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error(error.response || error);
      throw error; 
    });
};

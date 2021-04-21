export interface Model {
  readonly id: string;
  readonly title: string;
  readonly detail?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly completedAt: string | null;
}

import 'react-native-get-random-values';
import { v4 as generateUuid } from 'uuid';

import { assertIsDefined } from "../../lib/assert";

export interface Values {
  readonly title: string;
  readonly detail?: string;
}

export function factory(todo: Values): Model {
  assertIsDefined(todo.title);

  const now = new Date().toISOString();
  return{
    id: generateUuid(),
    title: todo.title,
    detail: todo.detail,
    createdAt: now,
    updatedAt: now,
    completedAt: null,
  };
}
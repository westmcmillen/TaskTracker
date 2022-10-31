import { db } from './db';
import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { v4 as uuid } from 'uuid';

export const fetchTasks = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const tasks: QueryResult = await db.query(
      'SELECT * FROM task ORDER BY created_at',
    );
    return response.status(200).json(tasks.rows);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

export const createTask = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const id: string = uuid();
    const { description } = request.body;
    await db.query(
      'INSERT INTO task (id, description, status) VALUES ($1, $2, $3)',
      [id, description, 'Pending'],
    );
    const tasks: QueryResult = await db.query(
      'SELECT * FROM task ORDER BY created_at',
    );
    return response.status(200).json(tasks.rows);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

export const updateTask = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const id: string = request.params.id;
    const description: string = request.body.description;
    const status: string = request.body.status;
    const timestamp: Date = new Date();
    const important: boolean = request.body.important;
    await db.query(
      'UPDATE task SET updated_at = $1,  description = $2, status = $3, important = $4 WHERE id = $5',
      [timestamp, description, status, important, id],
    );
    const tasks: QueryResult = await db.query(
      'SELECT * FROM task ORDER BY created_at',
    );
    return response.status(200).json(tasks.rows);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

export const deleteTask = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const id: string = request.params.id;
    await db.query('DELETE FROM task WHERE id = $1', [id]);
    const tasks: QueryResult = await db.query(
      'SELECT * FROM task ORDER BY created_at',
    );
    return response.status(200).json(tasks.rows);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

export const fetchArchives = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const tasks: QueryResult = await db.query(
      'SELECT * FROM archive ORDER BY created_at',
    );
    return response.status(200).json(tasks.rows);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

export const createArchive = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const { id, created_at, description, status, important } = request.body;
    await db.query(
      'INSERT INTO archive (id, created_at, updated_at, description, status, important) VALUES ($1, $2, $3, $4, $5, $6)',
      [id, new Date(created_at), new Date(), description, status, important],
    );
    const tasks: QueryResult = await db.query(
      'SELECT * FROM archive ORDER BY created_at',
    );
    return response.status(200).json(tasks.rows);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

export const deleteArchive = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  try {
    const id: string = request.params.id;
    await db.query('DELETE FROM archive WHERE id = $1', [id]);
    const tasks: QueryResult = await db.query(
      'SELECT * FROM archive ORDER BY created_at',
    );
    return response.status(200).json(tasks.rows);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
};

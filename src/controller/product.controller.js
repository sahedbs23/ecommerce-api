import { HTTP_OK, stringify } from '../config/constants';

export const findProducts = (req, res) => {
  res.status(HTTP_OK).json({
    status: HTTP_OK,
    statusText: stringify(HTTP_OK)
  });
};

export const findProduct = (req, res) => {
  res.status(HTTP_OK).json({
    status: HTTP_OK,
    statusText: stringify(HTTP_OK)
  });
};

export const saveProduct = (req, res) => {
  res.json({
    status: 201
  });
};

export const updateProduct = (req, res) => {
  res.json({
    status: 201
  });
};

export const deleteProduct = (req, res) => {
  res.json({
    status: 201
  });
};

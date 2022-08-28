import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './src/routes/index';
import userRouter from './src/routes/user';
import courseRouter from './src/routes/course';
import accountRouter from './src/routes/account';
import productRouter from './src/routes/product';

let app = express();
let PORT = process.env.PORT || 9000;

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/account', accountRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(PORT);

export default app;

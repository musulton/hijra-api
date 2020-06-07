import mongoose from 'mongoose';
import { connectionString } from './settings';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

export default mongoose;

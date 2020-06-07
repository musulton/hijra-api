import mongoose from 'mongoose';
import { connectionString } from './settings';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export default mongoose;

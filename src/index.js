import React from 'react';
import { createRoot } from 'react-dom/client';
import { config } from 'dotenv';

import App from './App';

config();
console.log('MongoDB on localhost: ' + process.env.DB_URI);

createRoot(document.getElementById('root')).render(
	<App />
);

import request from 'supertest';
import app from '../server.js';
import { describe, expect } from '@jest/globals';

describe('GET operations', () => {
   // --- GET /api/client-list ---
   test('retrieves all data from client_entries table', async () => {
       // --- use supertest to GET response (array of entries) from client-list path ---
       const response = await request(app).get('/api/client-list');

       // --- verify that request was successful ---
       expect(response.status).toBe(200);

       // --- verify that the body of the response is an array ---
       expect(Array.isArray(response.body)).toBeTruthy();
   });

   // --- GET /api/professional-list ---
   test('retrieves all data from professional_entries table', async () => {
       // --- use supertest to GET response (array of entries) from professional-list path ---
       const response = await request(app).get('/api/professional-list');

       expect(response.status).toBe(200);

       // --- verify that the body of the response is an array ---
       expect(Array.isArray(response.body)).toBeTruthy();
   });
})

describe('DELETE Operations', () => {
   // --- DELETE /api/client-list/:id ---
   test('delete specific entry from client_entries table', async () => {
        // --- create an entry to delete ---
        const newEntry = await request(app)
           .post('/contact/client/add')
           .send({
               first_name: 'Steven',
               last_name: 'Williams',
               email: 'swilliams@testing.com',
               type: 'family',
               issues: JSON.parse('["anger","depression","life_challenges"]'),
               age: 34,
               race: 'aian',
               gender: 'transgender',
               comment: 'I\'m struggling to work with my teen.'
           })
        
        const newEntryJson = JSON.parse(newEntry.text);

        // --- use supertest to DELETE the client_entry at specified id ---
        const response = await request(app).delete(`/api/client-list/${newEntryJson.client_entry_id}`);

        expect(response.status).toBe(204);

        // --- verify that response.body has a confirmation message with deleted entry id ---
        console.log("Path: ", response.req.path);
        expect(response.req.path).toBe(`/api/client-list/${newEntryJson.client_entry_id}`);
   }, 60000);

   // --- DELETE /api/professional-list/:id ---
   test('delete specific entry from professional_entries table', async () => {
        // --- create an entry to delete ---
        const newEntry = await request(app)
           .post('/contact/professional/add')
           .send({
               first_name: 'Jordan',
               last_name: 'Simmons',
               phone: '688-777-5555',
               email: 'jsims@test.com',
               comment: 'Looking for supervision hours.'
           })
        
        const newEntryJson = JSON.parse(newEntry.text);
        console.log("newEntryJson: ", newEntryJson);
            
        // --- use supertest to DELETE the professional_entry at specified id ---
        const response = await request(app).delete(`/api/professional-list/${newEntryJson.professional_entry_id}`);

        expect(response.statusCode).toBe(204);

        //  --- verify that response is navigating to the correct path with deleted entry id ---
        console.log("Response.req.path: ", response.req.path);
        expect(response.req.path).toBe(`/api/professional-list/${newEntryJson.professional_entry_id}`);
   }, 60000);
})

describe('POST Operations', () => {
   // --- POST /contact/client/add ---
   test('add client form data to the database on submission', async () => {
       const response = await request(app)
           .post('/contact/client/add')
           .send({
               first_name: 'Steven',
               last_name: 'Williams',
               email: 'swilliams@testing.com',
               type: 'family',
               issues: JSON.parse('["anger","depression","life_challenges"]'),
               age: 34,
               race: 'aian',
               gender: 'transgender',
               comment: 'I\'m struggling to work with my teen.'
           })
       expect(response.status).toBe(200);
       expect(response.body).toHaveProperty('client_entry_id');
   });

   // --- POST /contact/professional/add ---
   test('add professional form data to the database on submission', async () => {
       const response = await request(app)
           .post('/contact/professional/add')
           .send({
               first_name: 'Jordan',
               last_name: 'Simmons',
               phone: '688-777-5555',
               email: 'jsims@test.com',
               comment: 'Looking for supervision hours.'
           })
       expect(response.status).toBe(200);
       expect(response.body).toHaveProperty('professional_entry_id');
   });
})
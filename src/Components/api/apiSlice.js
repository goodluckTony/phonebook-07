import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64c128a8fa35860baea01bb3.mockapi.io/'}),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts',
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      })
    }), 
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
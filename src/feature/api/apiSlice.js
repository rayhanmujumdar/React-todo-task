import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact.mediusware.com/api",
  }),
  endpoints: (builder) => ({
    getAllCountryContacts: builder.query({
      query: (page) => `/contacts/?format=json&page=${page || 1}`,
    }),
    getUSCountryContacts: builder.query({
      query: (page) => `/country-contacts/United%20States/?format=json&page=${page || 1}`,
    }),
    getContact: builder.query({
      query: () => ``,
    }),
  }),
});

export const {
  useGetAllCountryContactsQuery,
  useGetUSCountryContactsQuery,
  useGetContactQuery,
} = apiSlice;

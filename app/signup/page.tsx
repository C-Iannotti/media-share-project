"use client"
import React, { useState, useEffect, useContext } from 'react'
import { PageContext } from '../layout'

export default function Login() {
  let updateAuthenticated = useContext(PageContext)

  useEffect(() => {
    updateAuthenticated(true)
  }, [])

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your email" required={true}></input>
              </div>
              <div>
                <label htmlFor="displayname" className="block mb-2 text-sm font-medium text-gray-900">Display name</label>
                <input type="text" name="displayname" id="displayname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter a display name" required={true}></input>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="••••••••" required={true}></input>
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
              <p className="text-sm font-light text-gray-500">
                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
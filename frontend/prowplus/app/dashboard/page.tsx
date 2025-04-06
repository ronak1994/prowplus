"use client"
import React from 'react'

const Dashboard = () => {
  return (
    <div className="content-inner">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Dashboard Overview</h5>
            </div>
            <div className="box-body">
              <p className="text-gray-500 dark:text-white/70">
                Dashboard content will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 
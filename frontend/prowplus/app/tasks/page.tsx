"use client"
import React from 'react'

const Tasks = () => {
  return (
    <div className="content-inner">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tasks Management</h5>
            </div>
            <div className="box-body">
              <p className="text-gray-500 dark:text-white/70">
                Tasks content will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks 
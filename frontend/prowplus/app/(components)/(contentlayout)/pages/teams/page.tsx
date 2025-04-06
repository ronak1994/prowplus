"use client"
import React, { Fragment } from 'react'
import Seo from '@/shared/layout-components/seo/seo';

const Teams = () => {
  return (
    <Fragment>
      <Seo title={"Teams"} />
      <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0">Teams</p>
          <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">Manage your team members and collaborations.</p>
        </div>
        <div className="btn-list md:mt-0 mt-2">
          <button type="button"
            className="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.45rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none">
            <i className="ri-user-add-line inline-block"></i>Add Member
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Teams Management</h5>
            </div>
            <div className="box-body">
              <p className="text-gray-500 dark:text-white/70">
                Teams content will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Teams 
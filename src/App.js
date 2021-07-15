import React from 'react'
import ContentLoader from 'react-content-loader'

const Dashboard = (props) => {
  return (
    <ContentLoader className="navbar-brand logo" viewBox="0 0 100% 1000" height={1000} width={"100%"} {...props}>
        <rect x="0" y="42" rx="5" ry="5" width="100%" height="200" />
        <rect x="0" y="265" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="285" rx="5" ry="5" width="100%" height="10" />
        <rect x="0" y="305" rx="5" ry="5" width="100%" height="10" />
        <rect x="300" y="335" rx="5" ry="5" width="65%" height="10" />
        <rect x="300" y="375" rx="5" ry="5" width="65%" height="10" />
        <rect x="300" y="395" rx="5" ry="5" width="65%" height="8" />
        <rect x="300" y="355" rx="5" ry="5" width="65%" height="10" />
        <rect x="300" y="415" rx="5" ry="5" width="65%" height="8" />
        <rect x="300" y="485" rx="5" ry="5" width="65%" height="8" />
        <rect x="300" y="445" rx="5" ry="5" width="65%" height="8" />
        <rect x="300" y="465" rx="5" ry="5" width="65%" height="8" />
        <rect x="300" y="505" rx="5" ry="5" width="65%" height="8" />
        <rect x="548" y="630" rx="0" ry="0" width="750" height="300" />
        <rect x="339" y="653" rx="0" ry="0" width="643" height="254" />
        <rect x="130" y="676" rx="0" ry="0" width="527" height="208" />
        <rect x="862" y="653" rx="0" ry="0" width="643" height="254" />
        <rect x="1187" y="676" rx="0" ry="0" width="527" height="208" />
    </ContentLoader>
    
  )
}


export default Dashboard;
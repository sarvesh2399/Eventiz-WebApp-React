import React from 'react'

export const EventCardsCard = ({ icon, title, text, linkText, linkHref, className = "" }) => {
  return (
    <div className={`card ${className}`} style={{ width: "100%" }}>
            <div className="card-body">
                <div className="card-icon">{icon}</div>
                <div className="card-title">{title}</div>
                <div className="card-text">{text}</div>
                <a href={linkHref} className="learn-more">
                    {linkText} &gt;
                </a>
            </div>
        </div>
  )
}

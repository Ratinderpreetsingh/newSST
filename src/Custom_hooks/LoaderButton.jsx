import React from 'react';
import { Oval } from 'react-loader-spinner'; // Import a specific loader

const LoaderButton = ({ type, loading, label }) => {
  return (
    <button 
      type={type} 
      className="btn-login" 
      style={{
        padding: '5px', 
        border: 'none', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
      }} 
      disabled={loading}
    >
      {loading ? (
        <>
          <Oval
            height={23}
            width={23}
            color="#ffffff" 
            wrapperStyle={{ marginRight: '5px' }} 
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#ffffff" 
            strokeWidth={4} 
            strokeWidthSecondary={4} 
          />
          {/* ... */}
        </>
      ) : (
        label || "Login"
      )}
    </button>
  );
};

export default LoaderButton;

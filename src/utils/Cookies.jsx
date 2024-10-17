import Cookies from 'js-cookie';

export const setCookie = (name, value, options = {}) => {
  if (!name || !value) {
    console.error('Both name and value are required to set a cookie.');
    return;
  }
  
  const defaultOptions = { expires: 1, path: '/',secure:true }; 
  const finalOptions = { ...defaultOptions, ...options };
  
  Cookies.set(name, value, finalOptions);
};

export const getCookie = (name) => {
  if (!name) {
    console.error('Cookie name is required to retrieve a cookie.');
    return null;
  }

  const cookieValue = Cookies.get(name);
  return cookieValue || null; 
};

// Remove a cookie by name
export const removeCookie = (name, options = {}) => {
  if (!name) {
    console.error('Cookie name is required to remove a cookie.');
    return;
  }

  const defaultOptions = { path: '/' }; // Default options for removing
  const finalOptions = { ...defaultOptions, ...options };

  Cookies.remove(name, finalOptions);
};



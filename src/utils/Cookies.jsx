import Cookies from 'js-cookie';

export const setCookie = (name, value, options = {}) => {
  if (!name || !value) {
    return;
  }
  
  const defaultOptions = { expires: 1, path: '/',secure:true }; 
  const finalOptions = { ...defaultOptions, ...options };
  
  Cookies.set(name, value, finalOptions);
};

export const getCookie = (name) => {
  if (!name) {
    return null;
  }

  const cookieValue = Cookies.get(name);
  return cookieValue || null; 
};

// Remove a cookie by name
export const removeCookie = (name, options = {}) => {
  if (!name) {
    return;
  }

  const defaultOptions = { path: '/' }; // Default options for removing
  const finalOptions = { ...defaultOptions, ...options };

  Cookies.remove(name, finalOptions);
};



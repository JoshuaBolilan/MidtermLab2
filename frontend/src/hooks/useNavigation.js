import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigationHistory, setNavigationHistory] = useState([]);

  // Track navigation history
  useEffect(() => {
    setNavigationHistory(prev => [...prev, location.pathname]);
  }, [location]);

  // Programmatic navigation functions
  const navigateTo = (path, options = {}) => {
    navigate(path, options);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  const replace = (path, options = {}) => {
    navigate(path, { replace: true, ...options });
  };

  const navigateWithState = (path, state) => {
    navigate(path, { state });
  };

  // Navigation guards
  const navigateWithGuard = (path, condition, fallbackPath = '/') => {
    if (condition) {
      navigate(path);
    } else {
      navigate(fallbackPath);
    }
  };

  // Get current route info
  const getCurrentRoute = () => {
    return {
      path: location.pathname,
      state: location.state,
      key: location.key
    };
  };

  // Check if user can navigate back
  const canGoBack = navigationHistory.length > 1;

  return {
    navigateTo,
    goBack,
    goForward,
    replace,
    navigateWithState,
    navigateWithGuard,
    getCurrentRoute,
    canGoBack,
    currentPath: location.pathname,
    navigationHistory
  };
};

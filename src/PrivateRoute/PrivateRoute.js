import React from 'react';
import { Redirect , Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    
    <Route
      {...rest}
      render={({ location }) => 
      user &&
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />

  );
};

export default PrivateRoute;



/* 
 <Route
      {...rest}     
      rander={({location}) => user.email ? children : <Redirect
      to={{
          pathname: "/login",
          state: { from: location }
        }}
      ></Redirect>}
      ></Route>
*/
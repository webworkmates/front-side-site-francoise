/**
 * Created by yanning on 24/04/2015.
 */
'use strict';

function handleError(response) {


  if (
    !angular.isObject(response.data) || !response.data.message
  ) {

    return ( $q.reject("An unknown error occurred.") );

  }

  return ( $q.reject(response.data.message) );

}
function handleSuccess(response) {

  return ( response.data );

}

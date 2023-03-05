import React from 'react';

const GetHealthPermissions = async () => {
  window.alert('hello world');

  /* Permission options */
  const permissions = {
    permissions: {
      read: [AppleHealthKit.Constants.Permissions.HeartRate],
      write: [AppleHealthKit.Constants.Permissions.Steps],
    },
  };

  AppleHealthKit.initHealthKit(permissions, error => {
    /* Called after we receive a response from the system */

    if (error) {
      window.alert('[ERROR] Cannot grant permissions!');
    }

    /* Can now read or write to HealthKit */

    const options = {
      startDate: new Date(2020, 1, 1).toISOString(),
    };

    AppleHealthKit.getHeartRateSamples(options, (callbackError, results) => {
      /* Samples are now collected from HealthKit */
    });
  });
};

export default GetHealthPermissions;

import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`CodeSkillSchool - ${title}`}</title>
      <link rel="icon" type="image/x-icon" href="school.ico" sizes="24x24" />
    </Helmet>
  );
};

export default MetaData;

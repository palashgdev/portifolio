import React, { useContext, useEffect } from 'react';
import ReactHelmet from 'react-helmet';
import { useHistory } from 'react-router-dom';

import GlobalState from '../../Store/getStore';
import AppLayout from '../../container/AppLayout';
import AdminContainer from '../../container/Admin';
import LoadingContainer from '../../components/Loading';

const AdminPage = () => {
  const { user } = useContext(GlobalState);

  const { value, loading: userLoading, error: userError } = user;

  const { email } = value || {};
  const { push } = useHistory();

  useEffect(() => {
    if (userLoading === false && userError === false) {
      console.log(email, 'email');
      if (email !== 'palashgdev@gmail.com') {
        push('/not-authorized', {});
      }
    }
  }, [email, push, userError, userLoading, value]);

  if (userLoading) {
    return <LoadingContainer />;
  }

  if (userError) {
    return <div>Error While Loading the user</div>;
  }

  return (
    <>
      <ReactHelmet>
        <title>Admin Page</title>
      </ReactHelmet>

      <AppLayout>
        <AdminContainer />
      </AppLayout>
    </>
  );

};

export default AdminPage;

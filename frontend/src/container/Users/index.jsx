import {getAllUsers} from "./actions";
import {connect} from "react-redux";
import React from "react";
import UserForm from "../../components/UserForm";

const Users = ({ users, getAllUsers }) => {
    if (!users) {
        getAllUsers();
    }

    return (
        <div className="users">
          {
            users?.map(u => {
              return <UserForm user={u} />
            })
          }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users?.users
    }
};

const mapDispatchToProps = () => {
    return {
        getAllUsers
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

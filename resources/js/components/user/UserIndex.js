import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {translate} from '../../includes/helpers';
import * as userApi from '../../requests/user';
import * as userAction from '../../actions/user';

class UserIndex extends Component {

    constructor(props) {
        super(props);
    }

    getUsers (page = 1) {
        let action = this.props.userAction;
        return userApi.get(action, page);
    }

    // do function after component ends render
    componentDidMount(){
        this.getUsers();
    }

    render() {
        const user = this.props.user.item;
        const users = this.props.user.items;
        const userAction = this.props.userAction;

        const restoreUser = (id) => {
            return userApi.restore(userAction, id);
        }

        const deleteUser = (id) => {
            return userApi.remove(userAction, id);
        }

        const deleteOrRestoreButton = (item) => {
            if(item.status == 1) {
                return (
                    <button onClick={() => deleteUser(item.id)} type="button" className="btn btn-danger mx-1">
                        <i className="fas fa-times-circle"></i> {translate('deactivate')}
                    </button>
                );
            } else {
                return (
                    <button onClick={() => restoreUser(item.id)} type="button" className="btn btn-success mx-1">
                        <i className="fas fa-check-circle"></i> {translate('activate')}
                    </button>
                );
            }
        }

        const userBlock = () => {
            return userIndexBlock();
        }


        const userListBlock = () => {

            console.log(users);

            if(users == null) return null;

            return users.data.map((item, index) =>
                <tr id={'user-' + item.id} key={index} className={item.status == 0 ? 'table-danger' : ''}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.role.name}</td>
                    <td>
                        {deleteOrRestoreButton(item)}
                    </td>
                </tr>
            );
        }

        const usersPagination = () => {

            if(users != null) {
                let pageCount = users.last_page;
                let currentPage = users.current_page;

                var rows = [];
                for (var i = 1; i <= pageCount; i++) {
                    rows.push(i);
                }

                return rows.map((page, index) =>
                    <li key={index} className={ page == currentPage ? 'page-item active' : 'page-item' }>
                        <a className="page-link" href="#" onClick={ () => {this.getUsers(page)} }>{page}</a>
                    </li>
                );

            } else {
                return null;
            }
        }

        const userIndexBlock = () => {
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>{translate('id')}</th>
                                <th>{translate('email')}</th>
                                <th>{translate('role')}</th>
                                <th>{translate('actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userListBlock()}
                        </tbody>
                    </table>

                    <ul className="pagination">
                        {usersPagination()}
                    </ul>
                </div>
            );
        }

        return userBlock();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);

import React, { Component } from 'react'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCard, deleteCard } from '../store/actions/index'

class Home extends Component {
    render() {
        const selectDispatch = item => {
            console.log(item)
            this.props.selectItem(item)
        }

        const deleteDispatch = id => {
            this.props.deleteCard(id)
        }

        return (
            <div className='container mt-3'>
                <h2>
                    Read Records{' '}
                    <Link to='/create/' className='btn btn-primary my-3'>
                        Create
                    </Link>
                </h2>
                <hr />

                <div className='row'>
                    {this.props.items.map(e => {
                        return (
                            <Item
                                key={e.id}
                                title={e.title}
                                desc={e.description}
                                image={e.image}
                                id={e.id}
                                select={selectDispatch}
                                deleteItem={deleteDispatch}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectItem: item => dispatch(selectCard(item)),
        deleteCard: id => dispatch(deleteCard(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

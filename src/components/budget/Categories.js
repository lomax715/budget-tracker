import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
import Category from './Category';
import CategoryForm from './CategoryForm';
import './Category.css';

class Categories extends Component {
  
  componentDidMount() {
    this.props.addCategory({ text: 'Tacos' });
    this.props.addCategory({ text: 'Burritos' });
    this.props.addCategory({ text: 'Sushi' });
    this.props.addCategory({ text: 'Cheeps' });
  }

  render() {
    const { categories, addCategory } = this.props;
    return (
      <div className="two-column">
        <div className="two-left">
          <p className="create-title">Create new category:</p>
          <CategoryForm onEdit={addCategory}/>
        </div>
        <ul className="category-ul">
          {categories.map(category => <Category key={category.id} {...category}/>)}
        </ul>
      </div>);
  }
}

export default connect(
  state => ({ categories: state }),
  { addCategory }
)(Categories);
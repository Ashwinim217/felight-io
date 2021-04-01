import React,{Component} from 'react';
import CategoryItem from '../category-item/category-item.component';
import './category-container.styles.scss';

class CategoryContainerComponent extends Component{
    constructor(){
        super();
        this.state={
            courseCategories:[
                {
                    title:'Java Full Stack',
                    imageUrl:'temp.png',
                    id:1,
                    linkUrl:'course-category/javafullstack'
                },
                {
                    title:'Java Script Full Stack',
                    imageUrl:'temp.png',
                    id:2,
                    linkUrl:'course-category/jsfullstack'
                },
                {
                    title:'Python Full Stack',
                    imageUrl:'temp.png',
                    id:3,
                    linkUrl:'course-category/pythonfullstack'
                },
                {
                    title:'Programming Bootcamp',
                    imageUrl:'temp.png',
                    id:4,
                    linkUrl:'course-category/bootcamp'
                },
                {
                    title:'Data Science',
                    imageUrl:'temp.png',
                    id:5,
                    linkUrl:'course-category/dsci'
                }
            ]
        };
    }

    componentDidMount(){
        fetch('')
        .then(response=>response.json())
        .then(items => this.setState({courseCategories:item}));
    }

    render(){
        return(
            <div className='categories-container'>
            {
                /*this.state.courseCategories.map(item=>(
                    <CategoryItem key={item.id}
                                    title={item.title}
                                    imageUrl={item.imageUrl}/>
                ))*/
                this.state.courseCategories.map(({id,title,imageUrl})=>(
                    <CategoryItem key={id}
                                    title={title}
                                    imageUrl={imageUrl}/>))
            }
            </div>
        );
    }
}

export default CategoryContainerComponent;
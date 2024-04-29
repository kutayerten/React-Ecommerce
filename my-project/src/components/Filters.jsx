import { Form, useLoaderData , Link} from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const {meta,params} = useLoaderData();
  const {search,company,category,shipping,order,price} = params;
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput 
      type='search' 
      label='search product' 
      name='search' 
      size='input-md'
      defaultValue = {search} 
      />
      {/* CATEGORIES */}
      <FormSelect
      label='select category'
      name='category'
      list={meta.categories}
      size='select-md'
      defaultValue = {category} 
      />
      {/* COMPANIES */}
      <FormSelect
      label='select company'
      name='company'
      list={meta.companies}
      size='select-md'
      defaultValue = {company} 
      />
      {/* ORDER */}
      <FormSelect
      label='sort by'
      name='order'
      list={['a-z','z-a','high','low']}
      size='select-md'
      defaultValue = {order} 
      />
      {/* PRICE */}
      <FormRange name='price' label='select price' size='range-md' price={price} />
      {/* SHIPPING */}
      <FormCheckbox name='shipping' label='free shipping' size='checkbox-md' defaultValue={shipping} />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-md'>
        Search
      </button>
      <Link to='/products' className='btn btn-accent btn-md' >
        Reset
      </Link>
    </Form>
  )
}

export default Filters
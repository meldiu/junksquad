import propTypes from 'prop-types'
export const EmailTemplate = ({ name, phone, address, date }) => (
  <div>
    <h1>Email from my JunkSquad website</h1>
    <p>
      Name:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {name}
      </span>
    </p>
    <p>
      Phone:{' +1 '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {phone}
      </span>
    </p>
    <p>
      Address:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {address}
      </span>
    </p>
    <p>
      Date:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {date}
      </span>
    </p>
  </div>
)
EmailTemplate.propTypes = {
  name: propTypes.string,
  phone: propTypes.string,
  address: propTypes.string,
  date: propTypes.string,
}

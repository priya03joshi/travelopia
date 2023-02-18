// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function DataPage() {
    
//   const location = useLocation();
//   const data = location.state.data;

//   return (
//     <div>
//       <h1>Data List</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name} ({item.email}) - {item.country} {item.numTravelers}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DataPage;

import React, { Component } from 'react';
class DataPage extends Component {
    state = {
        data: null
      };
    componentDidMount() {
        fetch('http://localhost:8080/api/data')
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }      
    render() {
        const { data } = this.state;
    
        return (
        <div>
            {data ? (
            <div>
                
                    <table style={{width:'100%'}}>
                    <tr>
                        <td style={{width:'25%'}}>Name</td>
                        <td style={{width:'25%'}}>Email</td>
                        <td style={{width:'25%'}}>Country</td>
                        <td style={{width:'25%'}}>Number of travelers</td>
                    </tr>
                    <hr style={{width:'400%'}}/>
                    {data.map(item => (
                    <tr>
                        <td style={{width:'25%'}}>{item.name}</td>
                        <td style={{width:'25%'}}>{item.email}</td>
                        <td style={{width:'25%'}}>{item.country}</td>
                        <td style={{width:'25%'}}>{item.numTravelers}</td>
                    </tr>
                    ))}
                </table>
                   
            </div>
            ) : (
            <p>Loading...</p>
            )}
        </div>
        );
    }
}

export default DataPage;

function App(){
  return ( 
  <div>
   <div //헤더
     style={{
     width: '100%',
     display: 'flex',
     color: '#343a40',
     borderBottom: 'solid',
     borderBottomWidth: '1px',
     borderBottomColor: '#e5e5e5',
     boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginBottom: '16px',
     flexFlow: 'row wrap',
     padding: '16px 24px',
     boxSizing: 'border-box',
     }}>
     
     <div
     style={{
       fontSize: '20px',     
      }}>    
     Company name
    </div>

    <div
    style={{
      fontSize: '16px',
      display: 'flex', 
      fontWeight: '400',   
      cursor: 'pointer',  
    }}
    >
      <div
      style={{
        display: 'flex',
        marginRight: '8px',
      }}>
       <div
      style={{
        padding: '8px',
      }}>Features</div> 

       <div
      style={{
        padding: '8px',
      }}>Enterprise</div>

       <div
      style={{
        padding: '8px',
      }}>Support</div>
      
       <div
      style={{
        padding: '8px',
      }}>Pricing</div>

      </div>
    
      <button
      style={{
        color: '#007bff',
        fontSize: '1rem', 
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#007bff',
        padding: '6px 12px',
        borderRadius: '.25rem',
        backgroundColor: 'transparent',
        cursor: 'pointer',
       }}
       >Sign up</button>

    </div>

  </div>

  <div
  style={{
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    color: '#212529', 
    paddingTop: '3rem', 
    paddingBottom: '1.5rem',
  }}>

    <div
    style={{
      fontSize: '56px',
      fontWeight: '300',
      marginBottom: '8px',
    }}>
      Pricing
    </div>

    <div
    style={{
      fontSize: '20px',
      fontWeight: '300',
      width: '668px',
      marginBottom: '16px',
    }}>
     Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
    </div>

  </div>

  <div //박스들 + 밑 블록
  style={{
    padding: '0px -15px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    marginBottom: '32px',
  }}>
  <div 
  style={{
    display: 'flex',
    marginBottom: '16px',
    flexFlow: 'row wrap',
  }}>
    <div
    style={{ //박스 전체
      boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
      margin: '0px 15px',
      textAlign: 'center',
      boxSizing: 'border-box',
      width: '288px',
      color: '#212529',
    }}>
     <div
     style={{ //박스 헤더
      fontSize: '24px', 
      border: 'solid',
      borderWidth: 'thin',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
      borderColor: 'rgba(0,0,0,.125)',
      padding: '12px 20px',
      backgroundColor: 'rgba(0,0,0,.03)',
     }}>
       Free
     </div>
     <div  //박스 바디
     style={{
       fontSize: '24px', 
       border: 'solid',
       borderWidth: 'thin',
       borderRadius: '0 0 calc(.25rem - 1px) calc(.25rem - 1px)',
       borderColor: 'rgba(0,0,0,.125)',
       borderTopColor: 'transparent',
       padding: '20px',
     }}>

      <div
       style={{
        display: 'flex',
        marginBottom: '12px',
        alignItems: 'baseline',
        justifyContent: 'center',
      }}>

        <div
        style={{
          fontSize: '40px',
          fontWeight: '550',
          marginRight: '12px',
        }}>$0</div>

        <div
        style={{
          color: '#6c757d',
          fontSize: '32px',
          fontWeight: '400',
        }}>/ mo</div>

      </div>
       
      <div
      style={{
       fontSize: '16px',
       textAlign: 'center',
       marginTop: '16px',
       marginBottom: '24px',
       fontWeight: '300',
      }}>
       <div>10 users included</div>
       <div>2 GB of storage</div>
       <div>Email support</div>
       <div>Help center access</div>
      </div>
      
      <button       
      style={{
        color: '#007bff',
        fontSize: '20px', 
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#007bff',
        padding: '8px 16px',
        borderRadius: '.3rem',
        textAlign: 'center',
        boxSizing: 'border-box',
        width: '248px',
        height: '47.8px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
       }}>
       Sign up for free
      </button>

     </div>

    </div>

    <div
    style={{ //박스 전체
      boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
      margin: '0px 15px',
      textAlign: 'center',
      boxSizing: 'border-box',
      width: '288px',
      color: '#212529',
    }}>
     <div
     style={{ //박스 헤더
      fontSize: '24px', 
      border: 'solid',
      borderWidth: 'thin',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
      borderColor: 'rgba(0,0,0,.125)',
      padding: '12px 20px',
      backgroundColor: 'rgba(0,0,0,.03)',
     }}>
       Pro
     </div>
     <div  //박스 바디
     style={{
       fontSize: '24px', 
       border: 'solid',
       borderWidth: 'thin',
       borderRadius: '0 0 calc(.25rem - 1px) calc(.25rem - 1px)',
       borderColor: 'rgba(0,0,0,.125)',
       borderTopColor: 'transparent',
       padding: '20px',
     }}>

      <div
       style={{
        display: 'flex',
        marginBottom: '12px',
        alignItems: 'baseline',
        justifyContent: 'center',
      }}>

        <div
        style={{
          fontSize: '40px',
          fontWeight: '550',
          marginRight: '12px',
        }}>$15</div>

        <div
        style={{
          color: '#6c757d',
          fontSize: '32px',
          fontWeight: '400',
        }}>/ mo</div>

      </div>
       
      <div
      style={{
       fontSize: '16px',
       textAlign: 'center',
       marginTop: '16px',
       marginBottom: '24px',
       fontWeight: '300',
      }}>
       <div>20 users included</div>
       <div>10 GB of storage</div>
       <div>Priority email support</div>
       <div>Help center access</div>
      </div>

      <button       
      style={{
        color: '#ffffff',
        backgroundColor: '#007bff',
        fontSize: '20px', 
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#007bff',
        padding: '8px 16px',
        borderRadius: '.3rem',
        textAlign: 'center',
        boxSizing: 'border-box',
        width: '248px',
        height: '47.8px',
        backgroundColor: '#007bff',
        cursor: 'pointer',
       }}>
       Get started
      </button>

     </div>

    </div>

    <div
    style={{ //박스 전체
      boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
      margin: '0px 15px',
      textAlign: 'center',
      boxSizing: 'border-box',
      width: '288px',
      color: '#212529',
    }}>
     <div
     style={{ //박스 헤더
      fontSize: '24px', 
      border: 'solid',
      borderWidth: 'thin',
      borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
      borderColor: 'rgba(0,0,0,.125)',
      padding: '12px 20px',
      backgroundColor: 'rgba(0,0,0,.03)',
     }}>
       Enterprise
     </div>
     <div  //박스 바디
     style={{
       fontSize: '24px', 
       border: 'solid',
       borderWidth: 'thin',
       borderRadius: '0 0 calc(.25rem - 1px) calc(.25rem - 1px)',
       borderColor: 'rgba(0,0,0,.125)',
       borderTopColor: 'transparent',
       padding: '20px',
     }}>

      <div
       style={{
        display: 'flex',
        marginBottom: '12px',
        alignItems: 'baseline',
        justifyContent: 'center',
      }}>

        <div
        style={{
          fontSize: '40px',
          fontWeight: '550',
          marginRight: '12px',
        }}>$29</div>

        <div
        style={{
          color: '#6c757d',
          fontSize: '32px',
          fontWeight: '400',
        }}>/ mo</div>

      </div>
       
      <div
      style={{
       fontSize: '16px',
       textAlign: 'center',
       marginTop: '16px',
       marginBottom: '24px',
       fontWeight: '300',
      }}>
       <div>30 users included</div>
       <div>15 GB of storage</div>
       <div>Phone and email support</div>
       <div>Help center access</div>
      </div>

      <button       
      style={{
        color: '#ffffff',
        backgroundColor: '#007bff',
        fontSize: '20px', 
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#007bff',
        padding: '8px 16px',
        borderRadius: '.3rem',
        textAlign: 'center',
        boxSizing: 'border-box',
        width: '248px',
        height: '47.8px',
        backgroundColor: '#007bff',
        cursor: 'pointer',
       }}>
       Contact us
      </button>

     </div>

    </div>

    </div>

    <div
    style={{
      margin: '48px 0px',
      padding: '48px 0px 0px',
      display: 'flex',
      borderTop: 'solid',
      borderWidth: 'thin',
      borderColor: 'rgba(0,0,0,.125)',
      justifyContent: 'space-around',
      boxSizing: 'border-box',
      width: '930px',
    }}>

      <div>
        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        width="24px" height="24px"/>
        
        <div
        style={{
          color: '#6c757d',
          boxSizing: 'border-box',
          width: '240px',
          fontSize: '12.8px',
        }}>
        ⓒ 2017-2018
        </div>
      </div>

      <div
      style={{
        boxSizing: 'border-box',
        width: '240px',
        padding: '0px 15px',
      }}>
        <div
        style={{
          fontSize: '20px',
          marginBottom: '8px',
          color: '#212529',
          fontWeight: '600',
        }}>
          Features
        </div>

        <div
        style={{
          fontSize: '16px',
          color: '#6c757d',
          cursor: 'pointer',
        }}>
         <div>Cool stuff</div>
         <div>Random feature</div>
         <div>Team feature</div>
         <div>Stuff for developers</div>
         <div>Another one</div>
         <div>Last time</div>
        </div>
      </div>

      <div
      style={{
        boxSizing: 'border-box',
        width: '240px',
        padding: '0px 15px',
      }}>
        <div
        style={{
          fontSize: '20px',
          marginBottom: '8px',
          color: '#212529',
          fontWeight: '600',
        }}>
          Resources
        </div>

        <div
        style={{
          fontSize: '16px',
          color: '#6c757d',
          cursor: 'pointer',
        }}>
         <div>Resource</div>
         <div>Resource name</div>
         <div>Another resource</div>
         <div>Final resource</div>
        </div>
      </div>

      <div
      style={{
        boxSizing: 'border-box',
        width: '240px',
        padding: '0px 15px',
      }}>
        <div
        style={{
          fontSize: '20px',
          marginBottom: '8px',
          color: '#212529',
          fontWeight: '600',
        }}>
          About
        </div>

        <div
        style={{
          fontSize: '16px',
          color: '#6c757d',
          cursor: 'pointer',
        }}>
         <div>Team</div>
         <div>Locations</div>
         <div>Team feature</div>
         <div>Privacy</div>
         <div>Teams</div>
        </div>
      </div>

    </div>

    </div>

  </div>
  
  )
}

export default App;
import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {
    
};


 

function Clock(props) {
   const {timeString} = useClock(props)
    return (
        <p style={{fontSize: '42px'}}>{timeString}</p>
    );
}

export default Clock;
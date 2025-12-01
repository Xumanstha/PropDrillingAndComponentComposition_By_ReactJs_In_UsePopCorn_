const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
};

const StartContainerStyle = {
    display: 'flex',
    gap: '4px',
};

export default function StarRating({ maxRating }) {

   
    return (
        <div style={containerStyle}>
            <div style={StartContainerStyle}>
                {
                    Array.from({ length: maxRating }, (_, i) => <span>S{i + 1}</span>)
                }
            </div>
            <p>
      
            </p>
        </div>
    )
    
}


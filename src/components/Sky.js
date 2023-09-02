export default function Sky(props) {
    return (
        <div
          style={{
            backgroundColor: props.sky,
            width: '100vw',
            height: '100vh'
          }}
        >
          {children}
        </div>
    )
}
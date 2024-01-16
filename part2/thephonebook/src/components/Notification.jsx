const Notification = ({message, type}) => {
    return (
        <div className={`${type === 'success'? 'success':'error'}-notification`}>
            {message}
        </div>
    )
}

export default Notification;
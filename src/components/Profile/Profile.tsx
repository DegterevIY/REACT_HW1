function Profile( { user } ){
    return (
        <div className="profile">
            <img className="profile_image"
                 src={user.imageUrl}
                 alt={user.firstName + " " + user.lastName}
            />
            <p className="profile_caption">{user.firstName + " " + user.lastName}</p>
        </div>
    );
} 

export default Profile;
function AvatarWithName({ avatar, name }) {
  return (
    <div className="flex items-center gap-2">
      <img className="h-8 w-8 rounded-full" src={avatar} />
      <span className="font-bold">{name}</span>
    </div>
  );
}

export default AvatarWithName;

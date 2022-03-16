function Subject({ pathname }) {
  return (
    <div>
      {pathname === "trips"
        ? "조행기"
        : pathname === "chats"
        ? "지역모임"
        : pathname === "cooks"
        ? "요리법/손질법"
        : "Error"}
    </div>
  );
}

export default Subject;

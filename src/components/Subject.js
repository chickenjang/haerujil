function Subject({ page }) {
  return (
    <div>
      {page === "trips"
        ? "조행기"
        : page === "chats"
        ? "지역모임"
        : page === "cooks"
        ? "요리법/손질법"
        : "Error"}
    </div>
  );
}

export default Subject;

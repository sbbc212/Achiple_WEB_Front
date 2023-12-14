function Linebtn({ text }: { text: string }) {
  return (
    <button style={{ padding: "8px 16px", border: "1px solid #2aa86b", borderRadius: "4px", color: "#2aa86b", fontWeight: "500", fontSize: "14px" }}>
      {text}
    </button>
  );
}

export default Linebtn;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 25,
    height: 50,
    padding: 15,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  footerText: {
    fontSize: 18,
  },
  input: {
    borderColor: "white",
    borderRadius: 25,
    borderWidth: 2,
    color: "white",
    fontSize: 18,
    height: 50,
    marginBottom: 18,
    padding: 15,
    width: "80%",
    backgroundColor: "rgba(12,12,12,0.5)",
    backdropFilter: "blur(5px)",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },
});

export default styles;

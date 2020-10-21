import { authService, firebaseInstance } from "fbase"
import React, { useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState("")
    const onChange = (event) => {
        const { target: { name, value } } = event
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        let data
        try {
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email,
                    password
                )
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email,
                    password
                )
            }
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
    }
    const toggleAccount = () => setNewAccount((prev) => !prev)
    const onSocialClick = async (event) => {
        const {target: {name}} = event
        let provider
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider()
        }

        const data = await authService.signInWithPopup(provider)
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value={newAccount ? "Create Account" : "Log In"}
                />
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button name="google" onClick={onSocialClick}>Continue with Google</button>
            </div>
        </div>
    )

}
export default Auth
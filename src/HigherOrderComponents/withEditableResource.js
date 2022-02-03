import axios from 'axios'
import React from 'react'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const withEditableResource = (Component, resourceName, resourcePath) => {
  return (props) => {
    const [originalData, setOriginalData] = React.useState(null)
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
      ;(async () => {
        const response = await axios.get(resourcePath)
        const currentData = response.data
        setOriginalData(currentData)
        setData(currentData)
      })()
    }, [resourcePath])

    const onChangeData = (changes) => {
      setData({ ...data, ...changes })
    }

    const onSaveData = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data })
      const currentData = response.data
      setOriginalData(currentData)
      setData(currentData)
    }

    const onReset = async () => {
      setData(originalData)
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChangeData,
      [`onSave${capitalize(resourceName)}`]: onSaveData,
      [`onReset${capitalize(resourceName)}`]: onReset,
    }

    return <Component {...props} {...resourceProps} />
  }
}

export default withEditableResource

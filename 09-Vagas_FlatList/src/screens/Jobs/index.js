import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { useState } from 'react'
import Header from '../../components/Header'
import Job from '../../components/Job'
import styles from './styles'
import jobList from '../../assets/jobList'

export default () => {
  const [jobs, setJobs] = useState(jobList)

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        style={styles.flatlist}
        ListHeaderComponent={Header}
        data={jobList}
        keyExtractor={job => job.id}
        renderItem={job => {
          const item = job.item
          return <Job
            key={item.id}
            name={item.name}
            wage={item.wage}
            description={item.description}
            contact={item.contact}
          />
        }}
      />
    </SafeAreaView>
  )
}

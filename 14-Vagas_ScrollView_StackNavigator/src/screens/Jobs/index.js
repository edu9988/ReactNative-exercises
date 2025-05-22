import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Thumbnail from '../../components/Thumbnail'

const jobList = [
  {
    id: 1,
    name: 'Desenvolvedor Backend',
    wage: 'R$ 12.000',
    description: 'Desenvolver APIs usando Java SpringBoot',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 2,
    name: 'Engenheiro de Dados',
    wage: 'R$ 15.000',
    description: 'Ajuda a tomada de decisões baseadas no uso dos usuários',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 3,
    name: 'Moço Capacitado',
    wage: 'R$ 4.120',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 4,
    name: 'Moço Capacitado',
    wage: 'R$ 4.000',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 5,
    name: 'Cubano Libre',
    wage: 'R$ 4.100',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 6,
    name: 'Moço Capacitado',
    wage: 'R$ 4.000',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 7,
    name: 'Moço Capacitado',
    wage: 'R$ 4.000',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 8,
    name: 'Moço Capacitado',
    wage: 'R$ 4.000',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 9,
    name: 'Moço Capacitado',
    wage: 'R$ 4.000',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 10,
    name: 'Moço Capacitado',
    wage: 'R$ 4.000',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  },
  {
    id: 11,
    name: 'Moço Capacitado',
    wage: 'R$ 4.000',
    description: 'Fazer a droga do trabalho',
    contact: 'fulaninho@gmail.com'
  }
]

export default () => {
  const [jobs, setJobs] = useState(jobList)

  return (
    <SafeAreaView style={{flex:1}}>
      <Slider>
        <Header />
        {jobs.map(job => {
          return <Thumbnail
            key={job.id}
            name={job.name}
            wage={job.wage}
            description={job.description}
            contact={job.contact}
          />
        })}
      </Slider>
    </SafeAreaView>
  )
}

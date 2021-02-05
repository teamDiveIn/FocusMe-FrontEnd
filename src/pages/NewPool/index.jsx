import * as B from 'src/components'
import { Input, Button, Slider } from 'antd'
import { useController } from './contoller'
import theme from 'src/styles/theme'
import * as S from './style'
import { Fade } from 'react-reveal'
import { useState } from 'react'

const NewPool = () => {
  const { form, onSubmit } = useController()
  const [sliderValue] = useState(1)

  return (
    <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width={990}>
        <Fade bottom distance="20px" delay={50}>
          <B.BaseCard backgroundColor={theme.primaryDark} shadow radius="10px">
            <B.Box p={2} >
              <div style={{ marginBottom: '20px' }}>
                <B.BaseText type="white" size={36} mb={4} style={{ marginRight: '20px' }}>
                  POOL 만들기
                </B.BaseText>
              </div>

              <B.BaseForm form={form} onFinish={onSubmit}>
                <B.Box display="flex">
                  <B.Box style={{ flex: '1 1 auto' }}>
                    <S.StyledFormItem name="poolname" label="Pool 이름">
                      <Input style={{ height: '58px', borderRadius: '8px' }} />
                    </S.StyledFormItem>
                    <S.StyledFormItem name="poolmode" label="Pool 모드">
                      <S.StyledRadioGroup defaultValue="a" size="large">
                        <S.StyledRadioButton value="a">조용한 모드</S.StyledRadioButton>
                        <S.StyledRadioButton value="b">자유로운 모드</S.StyledRadioButton>
                      </S.StyledRadioGroup>
                    </S.StyledFormItem>
                    <S.StyledFormItem name="capacity" label="최대 인원">
                      <S.StyledSlider
                        min={0}
                        max={6}
                        value={typeof sliderValue === 'number' ? sliderValue : 1}
                      />
                    </S.StyledFormItem>
                    <S.StyledFormItem name="keyword" label="키워드">
                    <S.StyledSelectGroup defaultValue="a" size="large">
                      <Button
                        ghost
                        style={{
                          width: '120px',
                          height: '58px',
                          borderRadius: '8px'
                        }}
                      >
                        영어자격증
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '120px',
                          height: '58px',
                          borderRadius: '8px'
                        }}
                      >
                        디자인/예술
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '120px',
                          height: '58px',
                          borderRadius: '8px'
                        }}
                      >
                        컴퓨터/개발
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '120px',
                          height: '58px',
                          borderRadius: '8px'
                        }}
                      >
                        취미/여가
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '120px',
                          height: '58px',
                          borderRadius: '8px'
                        }}
                      >
                        독서
                      </Button>
                      </S.StyledSelectGroup>
                    </S.StyledFormItem>
                  </B.Box>
                  <B.Box width={40}></B.Box>
                </B.Box>
              </B.BaseForm>
            </B.Box>
          </B.BaseCard>
        </Fade>

        <Fade bottom distance="20px" delay={250}>
          <B.Box mt={4}>
            <S.StyledSelectGroup defaultValue="a" size="large">
              <Button htmlType="submit" style={{ height: 50, width:150, borderRadius:"25px"}}>
                <B.BaseText bold plr={1}>
                  이전
                </B.BaseText>
              </Button>
              <Button type="primary" htmlType="submit" style={{ height: 50,  width:150, borderRadius:"25px"}}>
                <B.BaseText bold plr={1}>
                  Pool 만들기
                </B.BaseText>
              </Button>
            </S.StyledSelectGroup>
          </B.Box>
        </Fade>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default NewPool

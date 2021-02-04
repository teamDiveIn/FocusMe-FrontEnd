import * as B from 'src/components'
import { Input, Button, Slider } from 'antd'
import { useController } from './contoller'
import theme from 'src/styles/theme'
import * as S from './style'
import { Fade } from 'react-reveal'

const NewPool = () => {
  const { form, onSubmit } = useController()
  const value = 0

  return (
    <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
      <B.Box mlr={4} width={990}>
        <Fade bottom distance="20px" delay={50}>
          <B.BaseCard backgroundColor={theme.primaryDark} shadow>
            <B.Box p={2}>
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
                      <Slider value={value} />
                    </S.StyledFormItem>
                    <S.StyledFormItem name="keyword" label="키워드">
                      <Button
                        ghost
                        style={{
                          width: '126px',
                          height: '58px',
                          borderRadius: '8px',
                          marginRight: '10px',
                        }}
                      >
                        영어자격증
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '126px',
                          height: '58px',
                          borderRadius: '8px',
                          marginRight: '10px',
                        }}
                      >
                        디자인/예술
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '126px',
                          height: '58px',
                          borderRadius: '8px',
                          marginRight: '10px',
                        }}
                      >
                        컴퓨터/개발
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '126px',
                          height: '58px',
                          borderRadius: '8px',
                          marginRight: '10px',
                        }}
                      >
                        취미/여가
                      </Button>
                      <Button
                        ghost
                        style={{
                          width: '126px',
                          height: '58px',
                          borderRadius: '8px',
                          marginRight: '10px',
                        }}
                      >
                        독서
                      </Button>
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
            <B.TextRight>
              <Button type="primary" htmlType="submit" style={{ height: 50 }}>
                <B.BaseText bold plr={4}>
                  풀 만들기
                </B.BaseText>
              </Button>
            </B.TextRight>
          </B.Box>
        </Fade>
      </B.Box>
    </B.BaseTemplate>
  )
}

export default NewPool
